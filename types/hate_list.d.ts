declare interface HateEntry
{
    null : boolean;
    valid : boolean;
    ent : Mob;
    damage : number;
    hate : number;
    frenzy : boolean;
}

declare interface HateList
{
    entries : Array<HateEntry>;
}
