<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('tasks', 'TaskController@index')->middleware('cors');
Route::get('tasks/{id}', 'TaskController@show')->middleware('cors');
Route::post('tasks', 'TaskController@store')->middleware('cors');
Route::put('tasks/{id}', 'TaskController@update')->middleware('cors');
Route::delete('tasks/{id}', 'TaskController@delete')->middleware('cors');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
