import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Zap, 
  Globe, 
  Search, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  RefreshCw,
  Settings,
  Eye,
  MousePointer,
  Clock
} from 'lucide-react';

interface PageSpeedData {
  url: string;
  performanceScore: number;
  fcp: number;
  lcp: number;
  cls: number;
  fid: number;
  opportunities: string[];
  diagnostics: string[];
}

interface SearchConsoleData {
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  queries: Array<{
    query: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }>;
}

const SEOAnalytics = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageSpeedData, setPageSpeedData] = useState<PageSpeedData | null>(null);
  const [searchConsoleData, setSearchConsoleData] = useState<SearchConsoleData | null>(null);
  const [apiKey, setApiKey] = useState('');

  const analyzePageSpeed = async () => {
    if (!url || !apiKey) {
      alert('Please enter both URL and API key');
      return;
    }

    setLoading(true);
    try {
      // Google PageSpeed Insights API
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&category=PERFORMANCE&strategy=MOBILE`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch PageSpeed data');
      }

      const data = await response.json();
      const lighthouseResult = data.lighthouseResult;
      const audits = lighthouseResult.audits;

      const pageSpeedResult: PageSpeedData = {
        url: url,
        performanceScore: Math.round(lighthouseResult.categories.performance.score * 100),
        fcp: Math.round(audits['first-contentful-paint'].numericValue),
        lcp: Math.round(audits['largest-contentful-paint'].numericValue),
        cls: Math.round(audits['cumulative-layout-shift'].numericValue * 1000) / 1000,
        fid: audits['max-potential-fid'] ? Math.round(audits['max-potential-fid'].numericValue) : 0,
        opportunities: Object.values(audits)
          .filter((audit: any) => audit.scoreDisplayMode === 'binary' && audit.score < 1)
          .map((audit: any) => audit.title)
          .slice(0, 5),
        diagnostics: Object.values(audits)
          .filter((audit: any) => audit.scoreDisplayMode === 'informative')
          .map((audit: any) => audit.title)
          .slice(0, 3)
      };

      setPageSpeedData(pageSpeedResult);
    } catch (error) {
      console.error('Error analyzing page speed:', error);
      alert('Error analyzing page speed. Please check your API key and URL.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreVariant = (score: number) => {
    if (score >= 90) return 'default';
    if (score >= 50) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            SEO Analytics Setup
          </CardTitle>
          <CardDescription>
            Connect to real SEO APIs for live data analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                placeholder="https://your-website.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="api-key">Google API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Your Google API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </div>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You need a Google API key with PageSpeed Insights API enabled. 
              <a href="https://developers.google.com/speed/docs/insights/v5/get-started" 
                 className="text-blue-600 hover:underline ml-1" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Get API key here
              </a>
            </AlertDescription>
          </Alert>
          <Button onClick={analyzePageSpeed} disabled={loading} className="w-full">
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Run Page Speed Analysis
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {pageSpeedData && (
        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Page Speed Analysis</span>
                  <Badge variant={getScoreVariant(pageSpeedData.performanceScore)}>
                    {pageSpeedData.performanceScore}/100
                  </Badge>
                </CardTitle>
                <CardDescription>{pageSpeedData.url}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">First Contentful Paint</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{pageSpeedData.fcp}ms</div>
                      <Progress value={Math.max(0, 100 - (pageSpeedData.fcp / 30))} className="mt-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Largest Contentful Paint</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{pageSpeedData.lcp}ms</div>
                      <Progress value={Math.max(0, 100 - (pageSpeedData.lcp / 40))} className="mt-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Cumulative Layout Shift</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{pageSpeedData.cls}</div>
                      <Progress value={Math.max(0, 100 - (pageSpeedData.cls * 400))} className="mt-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">First Input Delay</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{pageSpeedData.fid}ms</div>
                      <Progress value={Math.max(0, 100 - (pageSpeedData.fid / 3))} className="mt-2" />
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <div className={`text-4xl font-bold ${getScoreColor(pageSpeedData.performanceScore)}`}>
                    {pageSpeedData.performanceScore}
                  </div>
                  <div className="text-sm text-muted-foreground">Performance Score</div>
                  <Progress value={pageSpeedData.performanceScore} className="mt-2 max-w-xs mx-auto" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Optimization Opportunities</CardTitle>
                <CardDescription>
                  Areas where you can improve your page performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pageSpeedData.opportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg">
                      <TrendingUp className="h-4 w-4 text-blue-600 mr-3" />
                      <span>{opportunity}</span>
                    </div>
                  ))}
                  {pageSpeedData.opportunities.length === 0 && (
                    <div className="flex items-center p-3 border rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span>Great! No major optimization opportunities found.</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="diagnostics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Diagnostic Information</CardTitle>
                <CardDescription>
                  Additional insights about your page performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pageSpeedData.diagnostics.map((diagnostic, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg">
                      <Search className="h-4 w-4 text-gray-600 mr-3" />
                      <span>{diagnostic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}

      {/* Mock Search Console Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Search Console Integration
          </CardTitle>
          <CardDescription>
            Connect to Google Search Console for real search performance data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Google Search Console integration requires OAuth authentication. 
              Contact your developer to set up the integration.
            </AlertDescription>
          </Alert>
          
          {/* Mock data preview */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <MousePointer className="h-3 w-3 mr-1" />
                  Clicks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-xs text-green-600">+12.3%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  Impressions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,821</div>
                <div className="text-xs text-green-600">+8.7%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">CTR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.72%</div>
                <div className="text-xs text-red-600">-0.3%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg. Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.4</div>
                <div className="text-xs text-green-600">+1.2</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOAnalytics;