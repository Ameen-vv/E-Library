import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bulletin'
})
export class BulletinPipe implements PipeTransform {
  transform(value: string): string {
    const lines = value.split('\n');
    const bulletedText = lines.map(line => '• ' + line).join('\n');
    return bulletedText;
  }
}
