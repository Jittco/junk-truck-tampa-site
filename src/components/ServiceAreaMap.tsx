import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenEntered, setTokenEntered] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-82.4572, 27.9506], // Tampa, FL coordinates
      zoom: 10,
    });

    // Add marker for business location
    new mapboxgl.Marker({ color: '#10B981' })
      .setLngLat([-82.4572, 27.9506])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<div class="p-2"><strong>Junk in the Truck Co</strong><br/>3810 W San Carlos Street<br/>Tampa, FL</div>'
        )
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setTokenEntered(true);
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!tokenEntered) {
    return (
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Service Area Map</h3>
        <p className="text-muted-foreground mb-4">
          Enter your Mapbox public token to view our service areas on the map.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
        </p>
        <form onSubmit={handleTokenSubmit} className="flex gap-2 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={!mapboxToken.trim()}>
            Load Map
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default ServiceAreaMap;