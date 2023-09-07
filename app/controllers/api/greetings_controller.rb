module Api
  class GreetingsController < ApplicationController
    def random
      random = Greeting.order('RANDOM()').first
      render json: { greeting: random }
    end
  end
end
