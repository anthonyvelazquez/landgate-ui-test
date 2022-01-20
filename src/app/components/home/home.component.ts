import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  searchResults: Array<any> = [];
  foodImageURLs: Array<string> = [];

  constructor(private fb: FormBuilder, private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodImageURLs = [
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg?w=1155&h=1528",
      "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547",
      "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408"
    ]
    this.searchForm = this.fb.group({
      count: ['', [Validators.required, Validators.pattern("^[1-9]*$")]]
    });
  }

  searchFormSubmit(form: FormGroup): void {
    this.fetchRandomFood(form.value.count);
  }

  fetchRandomFood(size: number): void {
    this.foodService.getRecipes(size).subscribe((res: any) => {
      this.searchResults = res;
      this.searchResults.forEach((res) => {
        res['image'] = this.getRandomImage();
      })
      console.log(this.searchResults)
    })
  }

  getRandomImage(): string {
    return this.foodImageURLs[Math.floor(Math.random()*this.foodImageURLs.length)];
  }

}
