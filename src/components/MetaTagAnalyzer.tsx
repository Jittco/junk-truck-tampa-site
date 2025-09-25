import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  Tag,
  FileText,
  Globe,
  Edit3,
  Eye,
  Target
} from 'lucide-react';

interface MetaAnalysis {
  url: string;
  title: {
    content: string;
    length: number;
    issues: string[];
    score: number;
  };
  description: {
    content: string;
    length: number;
    issues: string[];
    score: number;
  };
  h1: {
    content: string;
    count: number;
    issues: string[];
    score: number;
  };
  keywords: {
    content: string;
    issues: string[];
    score: number;
  };
  canonical: {
    url: string;
    issues: string[];
    score: number;
  };
  robots: {
    content: string;
    issues: string[];
    score: number;
  };
  openGraph: {
    title: string;
    description: string;
    image: string;
    issues: string[];
    score: number;
  };
  schema: {
    types: string[];
    issues: string[];
    score: number;
  };
  overallScore: number;
  recommendations: string[];
}

const MetaTagAnalyzer = () => {
  const [analyses, setAnalyses] = useState<MetaAnalysis[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState<MetaAnalysis | null>(null);

  // Simulate meta tag analysis for current pages
  useEffect(() => {
    const mockAnalyses: MetaAnalysis[] = [
      {
        url: '/',
        title: {
          content: 'Professional Junk Removal Tampa Bay | Junk in the Truck Co',
          length: 58,
          issues: [],
          score: 100
        },
        description: {
          content: 'Tampa Bay\'s trusted junk removal service. Same-day pickup, transparent pricing, eco-friendly disposal. Residential & commercial. Call now!',
          length: 142,
          issues: [],
          score: 100
        },
        h1: {
          content: 'Professional Junk Removal Services in Tampa Bay',
          count: 1,
          issues: [],
          score: 100
        },
        keywords: {
          content: 'junk removal, Tampa Bay, same-day service, residential, commercial',
          issues: ['Keywords meta tag is deprecated'],
          score: 60
        },
        canonical: {
          url: 'https://junkinthetruckco.com/',
          issues: [],
          score: 100
        },
        robots: {
          content: 'index, follow',
          issues: [],
          score: 100
        },
        openGraph: {
          title: 'Professional Junk Removal Tampa Bay | Junk in the Truck Co',
          description: 'Tampa Bay\'s trusted junk removal service. Same-day pickup, transparent pricing.',
          image: 'https://junkinthetruckco.com/hero-main.png',
          issues: [],
          score: 100
        },
        schema: {
          types: ['LocalBusiness', 'Organization'],
          issues: [],
          score: 100
        },
        overallScore: 94,
        recommendations: [
          'Remove keywords meta tag as it\'s no longer used by search engines',
          'Add FAQ schema markup to improve rich snippets',
          'Consider adding breadcrumb schema'
        ]
      },
      {
        url: '/services/residential-junk-removal',
        title: {
          content: 'Residential Junk Removal Tampa | Same Day Service',
          length: 52,
          issues: [],
          score: 95
        },
        description: {
          content: 'Professional residential junk removal in Tampa. Furniture, appliances, debris removal with same-day service.',
          length: 115,
          issues: ['Description could be longer for better SEO'],
          score: 85
        },
        h1: {
          content: 'Residential Junk Removal Services',
          count: 1,
          issues: [],
          score: 100
        },
        keywords: {
          content: '',
          issues: ['No keywords meta tag found'],
          score: 100
        },
        canonical: {
          url: 'https://junkinthetruckco.com/services/residential-junk-removal',
          issues: [],
          score: 100
        },
        robots: {
          content: 'index, follow',
          issues: [],
          score: 100
        },
        openGraph: {
          title: '',
          description: '',
          image: '',
          issues: ['Missing Open Graph tags'],
          score: 0
        },
        schema: {
          types: ['Service'],
          issues: ['Missing LocalBusiness schema'],
          score: 70
        },
        overallScore: 79,
        recommendations: [
          'Add Open Graph meta tags for better social media sharing',
          'Extend meta description to 150-160 characters',
          'Add LocalBusiness schema markup',
          'Include review schema for customer testimonials'
        ]
      },
      {
        url: '/services/commercial-junk-removal',
        title: {
          content: 'Commercial Junk Removal Tampa Bay | Business Cleanouts',
          length: 57,
          issues: [],
          score: 100
        },
        description: {
          content: 'Commercial junk removal services for Tampa Bay businesses. Office cleanouts, construction debris, retail space clearing.',
          length: 130,
          issues: [],
          score: 90
        },
        h1: {
          content: 'Commercial Junk Removal Services',
          count: 1,
          issues: [],
          score: 100
        },
        keywords: {
          content: '',
          issues: [],
          score: 100
        },
        canonical: {
          url: '',
          issues: ['Missing canonical URL'],
          score: 0
        },
        robots: {
          content: 'index, follow',
          issues: [],
          score: 100
        },
        openGraph: {
          title: 'Commercial Junk Removal Tampa Bay',
          description: 'Professional commercial junk removal services',
          image: '',
          issues: ['Missing Open Graph image'],
          score: 70
        },
        schema: {
          types: [],
          issues: ['No structured data found'],
          score: 0
        },
        overallScore: 71,
        recommendations: [
          'Add canonical URL to prevent duplicate content issues',
          'Add structured data (Service, LocalBusiness schemas)',
          'Include Open Graph image for social sharing',
          'Add FAQ schema for common business questions'
        ]
      }
    ];

    setAnalyses(mockAnalyses);
  }, []);

  const runFullSiteAnalysis = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Update analyses with fresh data
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return 'default';
    if (score >= 70) return 'secondary';
    return 'destructive';
  };

  const averageScore = analyses.reduce((sum, analysis) => sum + analysis.overallScore, 0) / analyses.length || 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Meta Tag Analysis</h2>
          <p className="text-muted-foreground">Comprehensive SEO meta tag audit for all pages</p>
        </div>
        <Button onClick={runFullSiteAnalysis} disabled={loading}>
          {loading ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Run Full Site Analysis
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Site Overview</span>
            <Badge variant={getScoreBadgeVariant(averageScore)}>
              Average Score: {Math.round(averageScore)}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{analyses.length}</div>
              <div className="text-sm text-muted-foreground">Pages Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {analyses.reduce((sum, a) => sum + a.title.issues.length + a.description.issues.length + a.h1.issues.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Issues</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(averageScore)}`}>
                {Math.round(averageScore)}%
              </div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </div>
          </div>
          <Progress value={averageScore} className="mt-4" />
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {analyses.map((analysis, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedAnalysis(analysis)}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{analysis.url}</CardTitle>
                  <CardDescription>
                    Title: {analysis.title.content}
                  </CardDescription>
                </div>
                <Badge variant={getScoreBadgeVariant(analysis.overallScore)}>
                  {analysis.overallScore}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="font-medium">Title</div>
                  <div className={getScoreColor(analysis.title.score)}>
                    {analysis.title.length} chars
                  </div>
                </div>
                <div>
                  <div className="font-medium">Description</div>
                  <div className={getScoreColor(analysis.description.score)}>
                    {analysis.description.length} chars
                  </div>
                </div>
                <div>
                  <div className="font-medium">H1 Tags</div>
                  <div className={getScoreColor(analysis.h1.score)}>
                    {analysis.h1.count} tag{analysis.h1.count !== 1 ? 's' : ''}
                  </div>
                </div>
                <div>
                  <div className="font-medium">Schema</div>
                  <div className={getScoreColor(analysis.schema.score)}>
                    {analysis.schema.types.length} type{analysis.schema.types.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>
              
              {analysis.recommendations.length > 0 && (
                <Alert className="mt-4">
                  <Target className="h-4 w-4" />
                  <AlertDescription>
                    {analysis.recommendations.length} recommendation{analysis.recommendations.length !== 1 ? 's' : ''} available
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Analysis Modal */}
      {selectedAnalysis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{selectedAnalysis.url}</CardTitle>
                  <CardDescription>Detailed Meta Tag Analysis</CardDescription>
                </div>
                <Button variant="outline" onClick={() => setSelectedAnalysis(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basic" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="basic">Basic Tags</TabsTrigger>
                  <TabsTrigger value="social">Social Media</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <div className="grid gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span className="flex items-center">
                            <Tag className="h-4 w-4 mr-2" />
                            Title Tag
                          </span>
                          <Badge variant={getScoreBadgeVariant(selectedAnalysis.title.score)}>
                            {selectedAnalysis.title.score}%
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                            {selectedAnalysis.title.content}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Length: {selectedAnalysis.title.length} characters (optimal: 50-60)
                          </div>
                          {selectedAnalysis.title.issues.map((issue, idx) => (
                            <Alert key={idx}>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>{issue}</AlertDescription>
                            </Alert>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Meta Description
                          </span>
                          <Badge variant={getScoreBadgeVariant(selectedAnalysis.description.score)}>
                            {selectedAnalysis.description.score}%
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                            {selectedAnalysis.description.content}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Length: {selectedAnalysis.description.length} characters (optimal: 150-160)
                          </div>
                          {selectedAnalysis.description.issues.map((issue, idx) => (
                            <Alert key={idx}>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>{issue}</AlertDescription>
                            </Alert>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span className="flex items-center">
                            <Edit3 className="h-4 w-4 mr-2" />
                            H1 Tag
                          </span>
                          <Badge variant={getScoreBadgeVariant(selectedAnalysis.h1.score)}>
                            {selectedAnalysis.h1.score}%
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                            {selectedAnalysis.h1.content}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Count: {selectedAnalysis.h1.count} (should be exactly 1)
                          </div>
                          {selectedAnalysis.h1.issues.map((issue, idx) => (
                            <Alert key={idx}>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>{issue}</AlertDescription>
                            </Alert>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="social" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Open Graph Tags</CardTitle>
                      <CardDescription>Social media sharing optimization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">OG Title</label>
                          <div className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                            {selectedAnalysis.openGraph.title || 'Not set'}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">OG Description</label>
                          <div className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                            {selectedAnalysis.openGraph.description || 'Not set'}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">OG Image</label>
                          <div className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                            {selectedAnalysis.openGraph.image || 'Not set'}
                          </div>
                        </div>
                        {selectedAnalysis.openGraph.issues.map((issue, idx) => (
                          <Alert key={idx}>
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>{issue}</AlertDescription>
                          </Alert>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="technical" className="space-y-4">
                  <div className="grid gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Canonical URL</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                          {selectedAnalysis.canonical.url || 'Not set'}
                        </div>
                        {selectedAnalysis.canonical.issues.map((issue, idx) => (
                          <Alert key={idx} className="mt-2">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>{issue}</AlertDescription>
                          </Alert>
                        ))}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Robots Meta Tag</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                          {selectedAnalysis.robots.content || 'Not set'}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Structured Data</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div>
                            <strong>Schema Types:</strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {selectedAnalysis.schema.types.map((type, idx) => (
                                <Badge key={idx} variant="outline">{type}</Badge>
                              ))}
                              {selectedAnalysis.schema.types.length === 0 && (
                                <span className="text-muted-foreground">None found</span>
                              )}
                            </div>
                          </div>
                          {selectedAnalysis.schema.issues.map((issue, idx) => (
                            <Alert key={idx}>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>{issue}</AlertDescription>
                            </Alert>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Improvement Recommendations</CardTitle>
                      <CardDescription>
                        Actionable steps to improve your SEO performance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedAnalysis.recommendations.map((recommendation, idx) => (
                          <div key={idx} className="flex items-start p-3 bg-blue-50 rounded-lg">
                            <Target className="h-4 w-4 text-blue-600 mr-3 mt-0.5" />
                            <span className="text-sm">{recommendation}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MetaTagAnalyzer;