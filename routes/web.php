<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

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

Route::get('/', [WebController::class, 'index'])->name('home');
Route::get('/nosotros', [WebController::class, 'viewNosotros'])->name('nosotros');
Route::get('/categorias', [WebController::class, 'viewCategorias'])->name('categorias');
Route::get('/contacto', [WebController::class, 'viewContacto'])->name('contacto');
Route::post('/ajax-send-mail', [WebController::class, 'ajaxSendMail']);
