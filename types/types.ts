export type Participant = {
  estimate: string;
  name: string;
};

export type RoomData = {
  isVisible: boolean;
  name: string;
  owner: string;
  participants: { [key: string]: Participant };
};
