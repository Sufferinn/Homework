import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework';
  name = 'Yulian';
  description = 'Studies at the 8th gymnasium in the 10th grade. Work experience: HTML, JS, Vue, Node, React.';
  information1 = 'Ability to solve complex problems;';
  information2 = 'Critical thinking;';
  information3 = 'Creativity.'

  cert1 = 'Foundation Certificate in English Literature';
  cert2 = 'Foundation Certificate in History';
  cert3 = 'Undergraduate Certificate in Archaeology';

  image = 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'

}
