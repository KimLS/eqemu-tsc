declare class Group
{
    constructor();
    null : boolean;
    valid : boolean;
    DisbandGroup() : void;
    IsGroupMember(mob : Mob) : boolean;
    CastGroupSpell(caster : Mob, spell_id : number) : void;
    SplitExp(exp : number, other : Mob) : void;
    GroupMessage(sender : Mob, language : number, message : string) : void;
    GetTotalGroupDamage(other : Mob) : number;
    SplitMoney(copper : number, silver : number, gold : number, platinum : number) : void;
    SplitMoney(copper : number, silver : number, gold : number, platinum : number, splitter : Client) : void;
    SetLeader(leader : Mob) : void;
    GetLeader() : Mob;
    GetLeaderName() : string;
    IsLeader(leader : Mob) : boolean;
    GroupCount() : number;
    GetHighestLevel() : number;
    GetLowestLevel() : number;
    TeleportGroup(sender : Mob, zone_id : number, instance_id : number, x : number, y : number, z : number, h : number) : void;
    GetID() : number;
    GetMember(index : number) : Mob;
}