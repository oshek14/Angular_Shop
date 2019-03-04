
// Template - Driven Forms.

//1)
`
<input  #title="ngModel" ngModel name="title" id="title" type="text" class="form-control" required>
<div class="alert alert-danger" *ngIf="title.touched && title.invalid">
  Title is required
</div>

1) ngModel means that this input field became ngModel itself. 2) #title="ngModel" means we appended some name to this input
and its value as the ngModel. 3) so with title variable, we can access this input element (it became ngModel already).
that's how and why title.touched and title.invalid  works. 4) name="title" means when we receive this form in .ts file,
we can get this input's value by the name "title".
`

//2) 
`
<form  #form="ngForm" (ngSubmit)="save(form.value)">

1) #form="ngForm" with this variable called form, we have the whole form element and form.value basically is
{title:"text", price:"20"}.

`

//3) reactivity a) https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4
// b) https://alligator.io/angular/change-detection-strategy/

//4)lazy loading https://scotch.io/courses/build-your-first-angular-website/lazy-loading-an-angular-section
