declare class Raid
{
    constructor();
    null: boolean;
    valid: boolean;
    IsRaidMember(name : string) : boolean;
    CastGroupSpell(caster : Mob, spell_id : number, group_id : number) : void;
    GroupCount(group_id : number) : number;
    RaidCount() : number;
    GetGroup(c : string|Client) : number;
    SplitExp(exp : number, other : Mob) : void;
    GetTotalRaidDamage(other : Mob) : number;
    SplitMoney(gid : number, copper : number, silver : number, gold : number, platinum : number, splitter? : Client) : void;
    BalanceHP(penalty : number, group_id : number) : void;
    IsLeader(c : string|Client) : boolean;
    IsGroupLeader(name : string) : boolean;
    GetHighestLevel() : number;
    GetLowestLevel() : number;
    GetClientByIndex(index : number) : Client;
    TeleportGroup(sender : Mob, zone_id: number, instance_id: number, x: number, y: number, z: number, h: number, group_id : number) : void;
    TeleportRaid(sender : Mob, zone_id: number, instance_id: number, x: number, y: number, z: number, h: number) : void;
    GetID() : number;
    GetMember(index : number) : Client;
    GetGroupNumber(index : number) : number;
}
