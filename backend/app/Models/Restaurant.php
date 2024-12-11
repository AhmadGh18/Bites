<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "longitude",
        "latitude",
        "city",
        "phoneNumber",
        "facebook",
        "instagram",
        "Type",
        "Bio",
        "user_id",
        "profile_picture"
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
