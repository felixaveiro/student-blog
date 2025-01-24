import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Users, Newspaper } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-green-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-800">Dashboard</h1>
        <Button className="bg-green-600 hover:bg-green-700">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Item
        </Button>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-white shadow-md">
          <CardHeader className="flex items-center space-x-4">
            <Users className="text-green-600" />
            <CardTitle className="text-lg">Members</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-800">350</p>
            <p className="text-sm text-gray-600">Active members</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="flex items-center space-x-4">
            <Newspaper className="text-green-600" />
            <CardTitle className="text-lg">News Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-800">28</p>
            <p className="text-sm text-gray-600">Published this month</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="flex items-center space-x-4">
            <Users className="text-green-600" />
            <CardTitle className="text-lg">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-800">15</p>
            <p className="text-sm text-gray-600">Total team members</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <div className="mt-8">
        <Tabs defaultValue="news" className="bg-white p-4 rounded-md shadow-md">
          <TabsList className="flex space-x-4">
            <TabsTrigger value="news" className="text-green-800">
              News
            </TabsTrigger>
            <TabsTrigger value="team" className="text-green-800">
              Our Team
            </TabsTrigger>
            <TabsTrigger value="membership" className="text-green-800">
              Membership
            </TabsTrigger>
          </TabsList>

          {/* News Tab */}
          <TabsContent value="news">
            <h2 className="text-xl font-bold text-green-800 mb-4">Manage News</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Community Health Day</TableCell>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>2025-01-23</TableCell>
                  <TableCell>
                    <Button variant="ghost" className="text-green-600">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                {/* Add more rows dynamically */}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team">
            <h2 className="text-xl font-bold text-green-800 mb-4">Our Team</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Smith</TableCell>
                  <TableCell>Coordinator</TableCell>
                  <TableCell>+250 789 000 111</TableCell>
                  <TableCell>
                    <Button variant="ghost" className="text-green-600">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>

          {/* Membership Tab */}
          <TabsContent value="membership">
            <h2 className="text-xl font-bold text-green-800 mb-4">Membership</h2>
            <p className="text-gray-600">Details about membership management go here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
