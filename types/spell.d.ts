declare class Spell {
    constructor();
    constructor(id: number);
    null: boolean;
    valid: boolean;
    GetID(): number;
    GetName(): string;
    GetPlayer1(): string;
    GetTeleportZone(): string;
    GetYouCast(): string;
    GetOtherCasts(): string;
    GetCastOnYou(): string;
    GetCastOnOther(): string;
    GetSpellFades(): string;
    GetRange(): number;
    GetAoeRange(): number;
    GetPushBack(): number;
    GetPushUp(): number;
    GetCastTime(): number;
    GetRecoveryTime(): number;
    GetRecastTime(): number;
    GetBuffdurationFormula(): number;
    GetBuffDuration(): number;
    GetAEDuration(): number;
    GetMana(): number;
    GetBase(i : number): number;
    GetBase2(i : number): number;
    GetMax(i : number): number;
    GetComponents(i : number): number;
    GetComponentCounts(i : number): number;
    GetNoexpendReagent(i : number): number;
    GetFormula(i : number): number;
    GetGoodEffect(): number;
    GetActivated(): number;
    GetResistType(): number;
    GetEffectID(i : number): number;
    GetTargetType(): number;
    GetBaseDiff(): number;
    GetSkill(): number;
    GetZoneType(): number;
    GetEnvironmentType(): number;
    GetTimeOfDay(): number;
    GetClasses(i : number): number;
    GetCastingAnim(): number;
    GetSpellAffectIndex(): number;
    GetDisallowSit(): number;
    GetDeities(i : number): number;
    GetUninterruptable(): number;
    GetResistDiff(): number;
    GetRecourseLink(): number;
    GetShortBuffBox(): number;
    GetDescNum(): number;
    GetEffectDescNum(): number;
    GetBonusHate(): number;
    GetEndurCost(): number;
    GetEndurTimerIndex(): number;
    GetHateAdded(): number;
    GetEndurUpkeep(): number;
    GetNumHits(): number;
    GetPVPResistBase(): number;
    GetPVPResistCalc(): number;
    GetPVPResistCap(): number;
    GetSpellCategory(): number;
    GetCanMGB(): number;
    GetDispelFlag(): number;
    GetMinResist(): number;
    GetMaxResist(): number;
    GetViralTargets(): number;
    GetViralTimer(): number;
    GetNimbusEffect(): number;
    GetDirectionalStart(): number;
    GetDirectionalEnd(): number;
    GetSpellGroup(): number;
    GetPowerfulFlag(): number;
    GetCastRestriction(): number;
    GetAllowRest(): boolean;
    GetInCombat(): boolean;
    GetOutOfCombat(): boolean;
    GetAEMaxTargets(): number;
    GetMaxTargets(): number;
    GetPersistDeath(): boolean;
    GetMinDist(): number;
    GetMinDistMod(): number;
    GetMaxDist(): number;
    GetMaxDistMod(): number;
    GetMinRange(): number;
    GetDamageShieldType(): number;
}
