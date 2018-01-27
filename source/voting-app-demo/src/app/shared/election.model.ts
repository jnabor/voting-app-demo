import { Candidate } from './candidate.model';

export class Election {

  public candidatesPresident: Candidate[];   /* 3 candidates */
  public candidatesVPInternal: Candidate[];  /* 5 candidates */
  public candidatesVPExternal: Candidate[];  /* 4 candidates */
  public candidatesSecretary: Candidate[];   /* 3 candidates */
  public candidatesTreasurer: Candidate[];   /* 3 candidates */

constructor( candidatesPresident: Candidate[], candidatesVPInternal: Candidate[], candidatesVPExternal: Candidate[], candidatesSecretary: Candidate[], candidatesTreasurer: Candidate[]) {
  this.candidatesPresident = candidatesPresident;
  this.candidatesVPInternal = candidatesVPInternal;
  this.candidatesVPExternal = candidatesVPExternal;
  this.candidatesSecretary = candidatesSecretary;
  this.candidatesTreasurer = candidatesTreasurer;
  }

}
