<?php

use Illuminate\Support\Facades\Route;
use SoftwaresCares\SuperBlog\Http\Controllers\LibraryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', [LibraryController::class, 'mediaLibrary'])->name('medialibrary'); //Media Dashboard Display

