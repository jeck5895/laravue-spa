<?php

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
/*
    NOTES: USING SPA APPLICATION  
    Laravel will only render thea index/route to be able to access the server 
    then Vue will take care the rest of routes

*/

Route::get('/', function () {
    return view('master-template.index');
    //return view('welcome');
});

Route::get('api/projects', 'ProjectsController@index');
Route::post('api/projects', 'ProjectsController@store');
