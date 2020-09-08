declare class Door extends Entity
{
    constructor();
    null : boolean;
    valid : boolean;
    SetDoorName(name : string) : void;
    GetDoorName() : string;
    GetX() : number;
    GetY() : number;
    GetZ() : number;
    GetHeading() : number;
    SetX(x : number) : void;
    SetY(y : number) : void;
    SetZ(z : number) : void;
    SetHeading(h : number) : void;
    SetLocation(x : number, y : number, z : number) : void;
    GetDoorDBID() : number;
    GetDoorID() : number;
    SetSize(sz : number) : void;
    GetSize() : number;
    SetIncline(incline : number) : void;
    GetIncline() : number;
    SetOpenType(type : number) : void;
    GetOpenType() : number;
    SetDisableTimer(flag : boolean) : void;
    GetDisableTimer() : boolean;
    SetLockPick(pick : number) : void;
    GetLockPick() : number;
    SetKeyItem(key : number) : void;
    GetKeyItem() : number;
    SetNoKeyring(type : number) : void;
    GetNoKeyring() : number;
    CreateDatabaseEntry() : void;
    ForceOpen(sender : Mob, alt_mode : boolean) : void;
    ForceClose(sender : Mob, alt_mode : boolean) : void;
}