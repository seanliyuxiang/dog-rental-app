class Api::RentalsController < ApplicationController

    # POST to 'api/rentals'
    def create
        rental = Rental.new(rental_params)
        if rental.save
            render json: rental, status: :created
        else
            render json: {error: 'Invalid rental'}, status: :unprocessable_entity
        end
    end

    private

    def rental_params
        params.permit(:dog_id, :user_id, :start_date, :end_date, :status)
    end

end
