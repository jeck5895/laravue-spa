<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class)->select(['id','name','email']); //always include the id because of relation
    }
}
