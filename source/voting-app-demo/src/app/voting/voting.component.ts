import { Vote } from '../shared/vote.model';
import { Candidate } from '../shared/candidate.model';
import { Election } from '../shared/election.model';
import { EvotingService} from '../shared/evoting.service';
import { Component, OnInit } from '@angular/core';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})

export class VotingComponent implements OnInit {
  isLinear = true;
  ElectionVotes: Election;

  selectedPresident: string = 'None';
  selectedVPI: string = 'None';
  selectedVPE: string = 'None';
  selectedSecretary: string = 'None';
  selectedTreasurer: string = 'None';

  constructor(private evotingService: EvotingService) { }

  ngOnInit() {
    this.ElectionVotes = this.evotingService.loadElectionCandidates();
  }

  submitVote() {
    console.log("vote submitted");

    //president
    this.evotingService.incrementVotesPresident(this.selectedPresident);
    //vp internal
    this.evotingService.incrementVotesVPInternal(this.selectedVPI);
    //vpexternal
    this.evotingService.incrementVotesVPExternal(this.selectedVPE);
    //secretary
    this.evotingService.incrementVotesSecretary(this.selectedSecretary);
    //treasurer
    this.evotingService.incrementVotesTreasurer(this.selectedTreasurer);

  }
}
