declare namespace APISchema {
  type LetterStatus = 'DRAFT' | 'DONE';

  interface Letter {
    userID?: string;
    senderName?: string;
    receiverName?: string;
    receivedDate?: string; // "yyyy-MM-dd HH:mm:ss"
    content?: string;
    id?: string;
    imageId?: string;
    letterStatus?: LetterStatus;
    receivedPhoneNumber?: string;
    title?: string;
    createdAt?: string; // "yyyy-MM-dd HH:mm:ss"\
    urlSlug?: string;
  }

  interface LetterPutReq
    extends Required<
      Pick<
        Letter,
        | 'userID'
        | 'id'
        | 'senderName'
        | 'receiverName'
        | 'receivedDate'
        | 'content'
        | 'letterStatus'
        | 'urlSlug'
      >
    > {
    imageId?: Letter['imageId'];
  }

  interface SaveDraftLetter {
    letter: Letter;
    method: 'POST' | 'PUT';
  }

  interface LetterTemplate extends Pick<Letter, 'receiverName' | 'receivedDate' | 'content'> {
    userID: NonNullable<Letter['userID']>;
    id: NonNullable<Letter['id']>;
    senderName: NonNullable<Letter['senderName']>;
    letterStatus: NonNullable<Letter['letterStatus']>;
    createdAt: NonNullable<Letter['createAt']>;
    urlSlug: NonNullable<Letter['urlSlug']>;
    imageId?: string;
    image?: string;
  }

  interface LetterImagePostReq {
    letterId: string;
    file: File;
  }

  interface LettersByStatusGetParams {
    page: number;
    size: number;
    letterStatus: LetterStatus;
  }

  interface LetterByStatusPage {
    content: LetterTemplate[];
    empty: boolean;
    first: boolean;
    last: booelan;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
  }

  interface User {
    id: string;
    username: string;
    email: string;
    token: string;
    nickname?: string;
    ageRange?: string;
    birthday?: string;
    birthyear?: string;
    gender?: string;
    password?: string;
    phoneNumber?: string;
    tutorialYN?: boolean;
  }

  interface ReminderUpDateType {
    letterId?: string;
    isSended?: boolean;
  }
}
