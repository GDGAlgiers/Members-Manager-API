import { model, Schema, Document } from 'mongoose';
import { Member } from '@interfaces/members.interface';

const RoleSchema: Schema = new Schema({
  role: {
    type: Schema.Types.String,
    enum: ['community', 'member', 'co-organizer', 'lead', 'co-lead', 'alumni'],
    default: 'community',
  },
  yearOfOccupation: {
    type: Schema.Types.String,
  },
  department: {
    type: Schema.Types.String,
    enum: ['communication', 'marketing', 'design', 'development', 'logistics', 'human-resources', 'projects'],
    required: true,
  },
});

const MemberSchema: Schema = new Schema(
  {
    firstName: {
      type: Schema.Types.String,
      required: true,
    },
    lastName: {
      type: Schema.Types.String,
      required: true,
    },
    phoneNumber: {
      type: Schema.Types.String,
      required: true,
    },
    secondPhoneNumber: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Schema.Types.Date,
    },
    occupation: {
      type: Schema.Types.String,
      enum: ['highschooler', 'student', 'professional'],
      default: 'student',
      required: true,
    },
    organization: {
      type: Schema.Types.String,
      required: true,
    },
    enrolledIn: {
      type: Schema.Types.Date,
      required: true,
    },
    membershipStatus: {
      type: Schema.Types.String,
      enum: ['active', 'inactive', 'cancelled'],
      default: 'active',
      required: true,
    },
    seasons: {
      type: [Schema.Types.String],
      required: true,
    },
    occupiedRoles: {
      type: [RoleSchema],
      required: true,
    },
    socialMedia: {
      facebookLink: {
        type: Schema.Types.String,
      },
      twitterLink: {
        type: Schema.Types.String,
      },
      linkedinLink: {
        type: Schema.Types.String,
      },
      githubLink: {
        type: Schema.Types.String,
      },
      instagramLink: {
        type: Schema.Types.String,
      },
    },
  },
  {
    timestamps: true,
  },
);

const memberModel = model<Member & Document>('Member', MemberSchema);
export default memberModel;
