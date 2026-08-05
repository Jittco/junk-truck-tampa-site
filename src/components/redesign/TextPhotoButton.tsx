import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { SMS_PHONE, SMS_BODY, buildSmsHref } from "@/config/hero";

/**
 * "Text a photo, get a price" button.
 *
 * WHAT THE WEB CAN AND CANNOT DO HERE
 *
 * An sms: link cannot carry an attachment. There is no markup or script that
 * opens the Messages app with a photo already attached — that is a platform
 * restriction on both iOS and Android, not something we can work around.
 *
 * So this uses the closest thing that actually exists, in two tiers:
 *
 *   1. Where the Web Share API supports files (modern iOS Safari and Android
 *      Chrome), tapping the button opens the camera directly. Once a photo is
 *      taken we hand it to the native share sheet with the message prefilled,
 *      and the customer picks Messages. The photo IS attached. The one thing
 *      the platform will not let us prefill is the recipient, so the number is
 *      shown right beneath the button and copied into the message body as a
 *      fallback.
 *
 *   2. Everywhere else, and if sharing is cancelled or fails, it falls back to
 *      a plain sms: link addressed to the business with the body prefilled.
 *      The customer taps the attach button and picks the photo themselves —
 *      one extra tap, and it always works.
 *
 * Capability is detected on mount rather than from the user agent, because
 * navigator.canShare with a real File is the only honest test of whether the
 * share path will actually work.
 */

interface TextPhotoButtonProps {
  /** Visual treatment. "solid" for the primary hero action, "outline" elsewhere. */
  variant?: "solid" | "outline";
  className?: string;
}

const TextPhotoButton = ({
  variant = "outline",
  className = "",
}: TextPhotoButtonProps) => {
  const [canShareFiles, setCanShareFiles] = useState(false);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Probe with a real (tiny) file — navigator.canShare({files}) returns false
    // for browsers that expose share() but not file sharing.
    try {
      const probe = new File(["probe"], "probe.jpg", { type: "image/jpeg" });
      setCanShareFiles(
        typeof navigator !== "undefined" &&
          typeof navigator.canShare === "function" &&
          navigator.canShare({ files: [probe] }),
      );
    } catch {
      setCanShareFiles(false);
    }
  }, []);

  if (!SMS_PHONE) return null;

  const smsHref = buildSmsHref(SMS_PHONE, SMS_BODY);
  const messageWithNumber = `${SMS_BODY}\n\n(Send to ${SMS_PHONE})`;

  const openSms = () => {
    window.location.href = smsHref;
  };

  const onFileChosen = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset so picking the same photo twice still fires a change event.
    e.target.value = "";
    if (!file) return;

    setBusy(true);
    try {
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Junk removal quote",
          text: messageWithNumber,
        });
      } else {
        openSms();
      }
    } catch (err) {
      // AbortError means the customer dismissed the share sheet on purpose —
      // dropping them into Messages after that would be obnoxious.
      if ((err as Error)?.name !== "AbortError") openSms();
    } finally {
      setBusy(false);
    }
  };

  const base =
    "inline-flex items-center justify-center gap-3 px-8 py-5 font-display text-lg uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-50 disabled:opacity-70";
  const look =
    variant === "solid"
      ? "bg-brand-orange text-ink-900 hover:bg-brand-orange-deep"
      : "border border-sand-50/35 text-sand-50 hover:border-brand-orange hover:text-brand-orange";

  // Capability path: real camera, real attachment.
  if (canShareFiles) {
    return (
      <>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="sr-only"
          onChange={onFileChosen}
          aria-hidden="true"
          tabIndex={-1}
        />
        <button
          type="button"
          disabled={busy}
          onClick={() => inputRef.current?.click()}
          className={`${base} ${look} ${className}`}
        >
          <Camera className="h-5 w-5" aria-hidden="true" />
          {busy ? "Opening…" : "Take a photo, get a price"}
        </button>
      </>
    );
  }

  // Fallback path: pre-addressed message, customer attaches.
  return (
    <a href={smsHref} className={`${base} ${look} ${className}`}>
      <Camera className="h-5 w-5" aria-hidden="true" />
      Text a photo, get a price
    </a>
  );
};

export default TextPhotoButton;
