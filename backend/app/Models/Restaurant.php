<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;
    protected $fillabe = [
        "name",
        "longitude",
        "latitude",
        "city",
        "phone_number",
        "facebook",
        "instagram",
        "Type",
        "Bio",
        "user_id",
        "logo"
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
