export class Vote {
  public selectedPresident: string;
  public selectedVPInternal: string;
  public selectedVPExternal: string;
  public selectedSecretary: string;
  public selectedTreasurer: string;

constructor( selectedPresident: string, selectedVPInternal: string, selectedVPExternal: string, selectedSecretary: string, selectedTreasurer: string) {
      this.selectedPresident = selectedPresident;
      this.selectedVPInternal = selectedVPInternal;
      this.selectedVPExternal = selectedVPExternal;
      this.selectedSecretary = selectedSecretary;
      this.selectedTreasurer = selectedTreasurer;
  }

}
