import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFaker';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article: any) => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }

}
