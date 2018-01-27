import { Vote } from './vote.model';
import { Candidate } from './candidate.model';
import { Election } from './election.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EvotingService {
  voteSubmitted = new EventEmitter<Election>();

  private candidatesPresident : Candidate[] =
  [
    new Candidate('MAHILUM, BILLY JOHN CUENCO', 27),
    new Candidate('LOZANO, ALBERT JR GALANG', 10),
    new Candidate('DELA CRUZ, JUAN GABRIEL ALCANTARA', 2)
  ];

  private candidatesVPInternal: Candidate[] =
  [
    new Candidate('MANALESE, CELVIN DREXLER SERRANO', 0),
    new Candidate('BAGOTE, MEDOSA AQUITAO', 5),
    new Candidate('GABON, RIANZE PETATE', 7),
    new Candidate('DALANGIN, LUIS NICO PIMENTEL', 21),
    new Candidate('JIMENEZ, NICO BRYAN MALATE', 4)
  ];

  private candidatesVPExternal: Candidate[] =
  [
    new Candidate('LEDESMA, JOHN CARLOS HIDALGO', 1),
    new Candidate('ERMINO, MARC GERALD RAMOS', 5),
    new Candidate('ABACAN, DONALYN DELOS REYES', 3),
    new Candidate('MARCELO, KENETH TYRON LOID SANTOS', 18)
  ];

  private candidatesSecretary: Candidate[] =
  [
    new Candidate('ISORENA, RONNIE MAGNO', 2),
    new Candidate('DE VERA, MARK ESTEPA', 35),
    new Candidate('LACUMBO, RAYSON RIC AMORA', 9)
  ];

  private candidatesTreasurer: Candidate[] =
  [
    new Candidate('GORION, MARK DREXLER MASING', 22),
    new Candidate('CABUAG, ALEX PARAÑAQUE', 21),
    new Candidate('FESTIN, MATHEW KEVIN VIRAY', 11)
  ];

  private Election: Election = new Election(
    this.candidatesPresident,
    this.candidatesVPInternal,
    this.candidatesVPExternal,
    this.candidatesSecretary,
    this.candidatesTreasurer);

  loadElectionCandidates(){
    return this.Election;
  }

  incrementVotesPresident(name: string){
    console.log(name);
    for (let entry of this.Election.candidatesPresident) {
      if(entry.candidateName == name) {
        entry.candidateVotes += 1;
      }
    }
  }

  incrementVotesVPInternal(name: string){
    console.log(name);
    for (let entry of this.Election.candidatesVPInternal) {
      if(entry.candidateName == name) {
        entry.candidateVotes += 1;
      }
    }
  }

  incrementVotesVPExternal(name: string){
    console.log(name);
    for (let entry of this.Election.candidatesVPExternal) {
      if(entry.candidateName == name) {
        entry.candidateVotes += 1;
      }
    }
  }

  incrementVotesSecretary(name: string){
    console.log(name);
    for (let entry of this.Election.candidatesSecretary) {
      if(entry.candidateName == name) {
        entry.candidateVotes += 1;
      }
    }
  }

  incrementVotesTreasurer(name: string){
    console.log(name);
    for (let entry of this.Election.candidatesTreasurer) {
      if(entry.candidateName == name) {
        entry.candidateVotes += 1;
      }
    }
  }
}
