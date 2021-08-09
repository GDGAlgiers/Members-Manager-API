import { MemberRole, MembershipStatus } from '@/interfaces/members.interface';
import { IsArray, IsDate, IsEmail, IsPhoneNumber, IsObject, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  public firstName: string;
  @IsString()
  public lastName: string;
  @IsEmail()
  public email: string;
  @IsPhoneNumber()
  public phoneNumber: string;
  @IsPhoneNumber()
  public secondPhoneNumber?: string;
  @IsDate()
  public dateOfBirth: Date;
  //TODO! provide better validation for occupation based on enum
  @IsString()
  public occupation: string;
  @IsString()
  public organization: string;
  @IsDate()
  public enrolledIn: Date;
  //TODO! validate using enum
  @IsString()
  public membershipState: MembershipStatus;
  @IsArray()
  public seasons: string[];
  //TODO! provide better validation
  @IsArray()
  public occupiedRoles: MemberRole[];
  @IsObject()
  public socialMedia: {
    facebookLink: string;
    twitterLink: string;
    linkedinLink: string;
    githubLink: string;
    instagramLink: string;
  };
}
