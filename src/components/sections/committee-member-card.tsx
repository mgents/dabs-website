import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getAvatarImage } from '@/lib/assets';
import type { CommitteeMember } from '@/data/committee';

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export function CommitteeMemberCard({ member }: CommitteeMemberCardProps) {
  const content = (
    <Card className="hover-lift overflow-hidden text-center p-6">
      <div className="flex justify-center mb-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted">
          <Image
            src={getAvatarImage(member.image)}
            alt={member.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      </div>
      <CardContent className="p-0">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
        {member.title && (
          <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
        )}
        {member.company && (
          <p className="text-sm text-muted-foreground">{member.company}</p>
        )}
      </CardContent>
    </Card>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
