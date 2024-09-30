import { Component, input, model } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  standalone: true,
})
export class TestComponent {
  title = input.required<string>();
  count = model<number>(1);
  query = injectQuery(() => ({
    queryKey: ['key'],
    queryFn: () => 'value',
  }));
}

