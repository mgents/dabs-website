import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { getInquiries } from '@/lib/db/inquiries';

export default async function AdminInquiriesPage() {
  const inquiries = await getInquiries();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Inquiries</h1>
        <p className="text-muted-foreground">View form submissions from the website</p>
      </div>

      {inquiries.length > 0 ? (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium">Type</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Date</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Status</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {inquiries.map((inquiry) => {
                const payload = inquiry.payload_json as Record<string, string>;
                return (
                  <tr key={inquiry.id} className="hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <Badge variant={
                        inquiry.type === 'contact' ? 'secondary' :
                        inquiry.type === 'membership' ? 'default' : 'outline'
                      }>
                        {inquiry.type}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {format(new Date(inquiry.created_at), 'MMM d, yyyy h:mm a')}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={
                        inquiry.status === 'new' ? 'warning' :
                        inquiry.status === 'in_progress' ? 'secondary' : 'success'
                      }>
                        {inquiry.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="max-w-md">
                        {payload.name && <span className="font-medium">{payload.name}</span>}
                        {payload.email && <span className="text-muted-foreground ml-2">{payload.email}</span>}
                        {payload.companyName && <span className="font-medium">{payload.companyName}</span>}
                        {payload.message && (
                          <p className="text-muted-foreground truncate mt-1">{payload.message}</p>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border rounded-lg">
          <p className="text-muted-foreground">No inquiries yet.</p>
        </div>
      )}
    </div>
  );
}
