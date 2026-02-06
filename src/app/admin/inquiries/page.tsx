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
              {inquiries.map((inquiry) => (
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
                    <Badge variant={inquiry.is_read ? 'success' : 'warning'}>
                      {inquiry.is_read ? 'Read' : 'New'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="max-w-md">
                      {inquiry.name && <span className="font-medium">{inquiry.name}</span>}
                      {inquiry.email && <span className="text-muted-foreground ml-2">{inquiry.email}</span>}
                      {inquiry.company && <span className="text-muted-foreground ml-2">({inquiry.company})</span>}
                      {inquiry.subject && (
                        <p className="text-foreground text-xs mt-1">{inquiry.subject}</p>
                      )}
                      {inquiry.message && (
                        <p className="text-muted-foreground truncate mt-1">{inquiry.message}</p>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
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
