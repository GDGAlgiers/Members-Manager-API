export type Occupation = 'highschooler' | 'student' | 'professional';

export type MembershipStatus = 'active' | 'inactive' | 'cancelled';

export type MemberRoleType = 'community' | 'member' | 'co-organizer' | 'lead' | 'co-lead' | 'alumni';

export type Department = 'communication' | 'marketing' | 'design' | 'development' | 'logistics' | 'human-resources' | 'projects';

export interface MemberRole {
  role: MemberRoleType;
  yearOfOccupation: string;
  department: Department;
}

export interface Member {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  dateOfBirth: Date;
  occupation: Occupation;
  organization: string;
  enrolledIn: Date;
  membershipStatus: MembershipStatus;
  seasons: string[];
  occupiedRoles: MemberRole[];
  socialMedia: {
    facebookLink: string;
    twitterLink: string;
    linkedinLink: string;
    githubLink: string;
    instagramLink: string;
  };
}
