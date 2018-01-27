import { Vote } from '../shared/vote.model';
import { Candidate } from '../shared/candidate.model';
import { Election } from '../shared/election.model';
import { EvotingService} from '../shared/evoting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  ElectionVotes: Election;

  constructor(private evotingService: EvotingService) { }

  ngOnInit() {
    this.ElectionVotes = this.evotingService.loadElectionCandidates();
  }

}
