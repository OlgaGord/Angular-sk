import { Component } from "@angular/core";

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-blog";
  posts: Post[] = [
    {
      title: "My hobbies",
      text: "I like travelling and taking pictures",
      id: 1
    },
    { title: "My places", text: "My favorite place is Paris", id: 2 }
  ];
  updatePost(post: Post) {
    this.posts.unshift(post);
    console.log("Post:", post);
  }
}
