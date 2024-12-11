<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        "restaurant_id",
        "title",
        "description",
        "thumbnail",
        "price",
        "tags"
    ];
    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }
}