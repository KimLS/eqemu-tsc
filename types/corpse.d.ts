declare class Corpse extends Mob
{
    constructor();
    null : boolean;
    valid : boolean;
    GetCharID() : number;
    GetDecayTime() : number;
    Lock() : void;
    UnLock() : void;
    IsLocked() : boolean;
    ResetLooter() : void;
    GetDBID() : number;
    IsRezzed() : boolean;
    GetOwnerName() : string
    Save() : boolean;
    Delete() : void;
    Bury() : void;
    Depop() : void;
    CountItems() : number;
    AddItem(itemnum : number, charges : number, slot : number, aug1 : number, aug2 : number, aug3 : number, aug4 : number, aug5 : number) : void;
    GetWornItem(equipSlot : number) : number;
    RemoveItem(lootslot : number) : void;
    SetCash(copper : number, silver : number, gold : number, platinum : number) : void;
    RemoveCash() : void;
    IsEmpty() : boolean;
    SetDecayTimer(decaytime : number) : void;
    CanMobLoot(charid : number) : boolean;
    AllowMobLoot(them : Mob, slot : number) : void;
    Summon(client : Client, spell : boolean, checkdistance : boolean) : boolean;
    GetCopper() : number;
    GetSilver() : number;
    GetGold() : number;
    GetPlatinum() : number;
    AddLooter(who : Mob) : void;
}