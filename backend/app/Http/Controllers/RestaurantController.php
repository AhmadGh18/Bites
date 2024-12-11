<?php

namespace App\Http\Controllers;

use App\Http\Requests\Restaurantrequest;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RestaurantController extends Controller
{
    public function create(Restaurantrequest $request)
    {
        $data = $request->validated();

        $restaurantData = [
            'user_id' => $data['user_id'],
            'name' => $data['name'],
            'city' => $data['city'],
            'longitude' => $data['longitude'],
            'latitude' => $data['latitude'],
            'Type' => $data['Type'],
            'phoneNumber' => $data['phoneNumber'],

        ];


        if ($request->hasFile('profile_picture')) {
            $file = $request->file('profile_picture');
            $fileName = now()->format('His') . $file->getClientOriginalName();

            $path = $file->store('images', 'public');

            $restaurantData['profile_picture'] = $path;
        }

        $restaurant = Restaurant::create($restaurantData);


        return response()->json([
            'message' => 'User registered successfully',
            "restaurant" => $restaurant
        ]);
    }
    public function getNearbyRestaurants(Request $request)
    {
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        $radius = 5;

        $nearbyRestaurants = DB::table('restaurants')
            ->select('*')
            ->selectRaw('( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance', [$latitude, $longitude, $latitude])
            ->having('distance', '<', $radius)
            ->get();

        // $restaurants = $nearbyRestaurants->map(function ($restaurant) {
        //     $feedbacks = Feedback::where('restaurant_id', $restaurant->id)->get();

        //     $ratingCount = $feedbacks->count();
        //     $totalRating = $feedbacks->sum('stars');
        //     $averageRating = $ratingCount > 0 ? $totalRating / $ratingCount : 0;

        //     $restaurant->rating = $averageRating; // Adding average rating to each restaurant
        //     $restaurant->rating_count = $ratingCount; // Adding rating count to each restaurant
        //     return $restaurant;
        // });

        return response()->json($nearbyRestaurants);
    }
    public function update(Request $request, Restaurant $resIt)
    {
        $validatedData = $request->validate([
            'city' => 'sometimes|string',
            'phoneNumber' => 'sometimes|string',
            'name' => 'sometimes|string',
            'Type' => 'sometimes|string',
        ]);
        $resIt->update($validatedData);

        // Return a response indicating success
        return response()->json(['message' => 'Restaurant item updated successfully']);
    }
    public function getByUserId($userId)
    {
        $restaurant = Restaurant::where('user_id', $userId)->first();

        if ($restaurant) {



            return response()->json([
                'restaurant' => $restaurant,

            ]);
        } else {
            return response()->json(['error' => 'Restaurant not found'], 404);
        }
    }
}
