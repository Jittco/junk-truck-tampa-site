import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEOAnalytics from './SEOAnalytics';
import MetaTagAnalyzer from './MetaTagAnalyzer';
import { 
  Search, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye,
  Clock,
  Target,
  BarChart3,
  Globe,
  Zap,
  Edit,
  Settings
} from 'lucide-react';

interface PageSEO {
  url: string;
  title: string;
  metaDescription: string;
  h1: string;
  score: number;
  ranking: number;
  traffic: number;
  keywords: string[];
  errors: string[];
  improvements: string[];
  lastUpdated: string;
  pageSpeed: number;
  mobileOptimized: boolean;
}

const SEODashboard = () => {
  const [pages, setPages] = useState<PageSEO[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageSEO | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real implementation, this would fetch from APIs
  useEffect(() => {
    const mockPages: PageSEO[] = [
      {
        url: '/',
        title: 'Professional Junk Removal Tampa Bay | Junk in the Truck Co',
        metaDescription: 'Tampa Bay\'s trusted junk removal service. Same-day pickup, transparent pricing, eco-friendly disposal. Residential & commercial. Call now!',
        h1: 'Professional Junk Removal Services in Tampa Bay',
        score: 85,
        ranking: 3,
        traffic: 1250,
        keywords: ['junk removal tampa', 'tampa junk removal', 'junk pickup'],
        errors: ['Meta description too long (165 chars)'],
        improvements: ['Add more internal links', 'Optimize images for speed'],
        lastUpdated: '2024-01-15',
        pageSpeed: 78,
        mobileOptimized: true
      },
      {
        url: '/services/residential-junk-removal',
        title: 'Residential Junk Removal Tampa | Same Day Service',
        metaDescription: 'Professional residential junk removal in Tampa. Furniture, appliances, debris removal with same-day service.',
        h1: 'Residential Junk Removal Services',
        score: 72,
        ranking: 8,
        traffic: 680,
        keywords: ['residential junk removal', 'home cleanout', 'furniture removal'],
        errors: ['Missing alt text on 2 images', 'H2 tags not optimized'],
        improvements: ['Add FAQ section', 'Include customer reviews', 'Improve page speed'],
        lastUpdated: '2024-01-10',
        pageSpeed: 65,
        mobileOptimized: true
      },
      {
        url: '/services/commercial-junk-removal',
        title: 'Commercial Junk Removal Tampa Bay | Business Cleanouts',
        metaDescription: 'Commercial junk removal services for Tampa Bay businesses. Office cleanouts, construction debris, retail space clearing.',
        h1: 'Commercial Junk Removal Services',
        score: 68,
        ranking: 12,
        traffic: 420,
        keywords: ['commercial junk removal', 'office cleanout', 'business debris'],
        errors: ['Slow loading time', 'Missing schema markup'],
        improvements: ['Add testimonials', 'Optimize for local search', 'Add pricing information'],
        lastUpdated: '2024-01-08',
        pageSpeed: 58,
        mobileOptimized: false
      },
      {
        url: '/service-areas/brandon-fl',
        title: 'Junk Removal Brandon FL | Local Service Area',
        metaDescription: 'Professional junk removal services in Brandon, Florida. Local team, same-day service, transparent pricing.',
        h1: 'Junk Removal Services in Brandon, FL',
        score: 76,
        ranking: 5,
        traffic: 320,
        keywords: ['junk removal brandon fl', 'brandon junk pickup'],
        errors: ['Duplicate H2 tags'],
        improvements: ['Add local business schema', 'Include service area map'],
        lastUpdated: '2024-01-12',
        pageSpeed: 72,
        mobileOptimized: true
      }
    ];
    
    setTimeout(() => {
      setPages(mockPages);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPages = pages.filter(page => 
    page.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const averageScore = pages.reduce((sum, page) => sum + page.score, 0) / pages.length || 0;
  const totalTraffic = pages.reduce((sum, page) => sum + page.traffic, 0);
  const totalErrors = pages.reduce((sum, page) => sum + page.errors.length, 0);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return 'default';
    if (score >= 60) return 'secondary';
    return 'destructive';
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-2">Loading SEO data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">SEO Dashboard</h1>
          <p className="text-muted-foreground">Monitor and optimize your website's search performance</p>
        </div>
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Run SEO Audit
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average SEO Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(averageScore)}</div>
            <Progress value={averageScore} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Traffic</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTraffic.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Errors</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalErrors}</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pages Tracked</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pages.length}</div>
            <p className="text-xs text-muted-foreground">Active pages</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">Page Analysis</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="errors">Errors & Issues</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="meta">Meta Tags</TabsTrigger>
          <TabsTrigger value="analytics">Live Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="grid gap-4">
            {filteredPages.map((page, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedPage(page)}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{page.url}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {page.title}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getScoreBadgeVariant(page.score)}>
                        Score: {page.score}
                      </Badge>
                      <Badge variant="outline">
                        Rank #{page.ranking}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <strong>Meta Description:</strong> {page.metaDescription}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {page.traffic} visits
                      </span>
                      <span className="flex items-center">
                        <Zap className="h-3 w-3 mr-1" />
                        {page.pageSpeed}% speed
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Updated {page.lastUpdated}
                      </span>
                    </div>
                    {page.errors.length > 0 && (
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          {page.errors.length} error{page.errors.length !== 1 ? 's' : ''} found
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rankings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Rankings</CardTitle>
              <CardDescription>Track your search engine positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pages.map((page, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{page.url}</h4>
                      <Badge variant="outline">Rank #{page.ranking}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {page.keywords.map((keyword, kidx) => (
                        <Badge key={kidx} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Issues & Errors</CardTitle>
              <CardDescription>Critical issues that need immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pages.filter(page => page.errors.length > 0).map((page, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">{page.url}</h4>
                    <div className="space-y-2">
                      {page.errors.map((error, eidx) => (
                        <div key={eidx} className="flex items-center text-red-600">
                          <XCircle className="h-4 w-4 mr-2" />
                          {error}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <h5 className="font-medium text-sm mb-2">Recommended Improvements:</h5>
                      {page.improvements.map((improvement, iidx) => (
                        <div key={iidx} className="flex items-center text-blue-600 text-sm">
                          <Target className="h-3 w-3 mr-2" />
                          {improvement}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Performance</CardTitle>
              <CardDescription>Monitor your target keywords across all pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {Array.from(new Set(pages.flatMap(page => page.keywords))).map((keyword, index) => {
                  const pagesWithKeyword = pages.filter(page => page.keywords.includes(keyword));
                  const avgRank = pagesWithKeyword.reduce((sum, page) => sum + page.ranking, 0) / pagesWithKeyword.length;
                  
                  return (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{keyword}</h4>
                        <p className="text-sm text-muted-foreground">
                          Found on {pagesWithKeyword.length} page{pagesWithKeyword.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Avg. Rank #{Math.round(avgRank)}</div>
                        <div className="text-sm text-muted-foreground">
                          {pagesWithKeyword.reduce((sum, page) => sum + page.traffic, 0)} visits
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meta" className="space-y-4">
          <MetaTagAnalyzer />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <SEOAnalytics />
        </TabsContent>
      </Tabs>

      {/* Page Detail Modal */}
      {selectedPage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{selectedPage.url}</CardTitle>
                  <CardDescription>Detailed SEO Analysis</CardDescription>
                </div>
                <Button variant="outline" onClick={() => setSelectedPage(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className={`text-2xl font-bold ${getScoreColor(selectedPage.score)}`}>
                    {selectedPage.score}
                  </div>
                  <div className="text-sm text-muted-foreground">SEO Score</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">#{selectedPage.ranking}</div>
                  <div className="text-sm text-muted-foreground">Search Ranking</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">{selectedPage.traffic}</div>
                  <div className="text-sm text-muted-foreground">Monthly Visits</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Page Title</label>
                  <Input value={selectedPage.title} readOnly className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Meta Description</label>
                  <Textarea value={selectedPage.metaDescription} readOnly className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">H1 Tag</label>
                  <Input value={selectedPage.h1} readOnly className="mt-1" />
                </div>
              </div>

              {selectedPage.errors.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Errors Found</h4>
                  <div className="space-y-2">
                    {selectedPage.errors.map((error, index) => (
                      <Alert key={index}>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-medium mb-2">Improvement Recommendations</h4>
                <div className="space-y-2">
                  {selectedPage.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-center p-2 bg-blue-50 rounded">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SEODashboard;