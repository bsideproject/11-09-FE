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
  }

  interface LetterPutReq extends Pick<Letter, 'imageId'> {
    userID: Letter['userID'];
    id: Letter['id'];
    senderName: Letter['senderName'];
    receiverName: Letter['senderName'];
    receivedDate: Letter['senderName'];
    content: Letter['senderName'];
    letterStatus: Letter['letterStatus'];
  }

  interface LetterImagePostReq {
    letterId: string;
    file: File;
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
