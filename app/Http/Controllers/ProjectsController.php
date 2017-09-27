<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\User;
use App\Http\Requests\StoreProjects;

class ProjectsController extends Controller
{
    //
    public function index()
    {
        return Project::with('user')->get(); //return projects with associated users in user_table
    }

    public function store(StoreProjects $request)
    {
        $project = new Project;
        $project::create($request['project_name'],$request['description']);
        /* INSERT DATA WITH RELATION FROM OTHER TABLE */
        // $project = User::find(1)
        //             ->projects()
        //             ->create([
        //                 "project_name" => $request['projectName'],
        //                 "description" => $request['description']
        //             ]); 
        
       // return $project->load('user');
       return $message = array(
           "name" => $request['project_name'], 
            "description"=>$request['description']);
    }
}
