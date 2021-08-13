import { MemberRole, MembershipStatus } from '@/interfaces/members.interface';
import { IsArray, IsEmail, IsPhoneNumber, IsObject, IsString, IsDateString } from 'class-validator';

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
  @IsDateString()
  public dateOfBirth: Date;
  //TODO! provide better validation for occupation based on enum
  @IsString()
  public occupation: string;
  @IsString()
  public organization: string;
  @IsDateString()
  public enrolledIn: Date;
  //TODO! validate using enum
  @IsString()
  public membershipStatus: MembershipStatus;
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
