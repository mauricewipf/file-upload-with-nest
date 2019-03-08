import { Controller, FilesInterceptor, Get, Logger, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    Logger.log('getHello called');
    return this.appService.getHello();
  }

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files', 5))
  upload(@UploadedFiles() files) {
    return 'done';
  }

}
