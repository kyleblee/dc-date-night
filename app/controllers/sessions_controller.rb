class SessionsController < ApplicationController
  def create
    user = User.find_by(email: auth_params[:email])
    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      expert_boolean = user.expert == 1 ? true : false
      render json: {jwt: jwt, expert: expert_boolean}
    end
  end

  private

  def auth_params
    params.require(:auth).permit(:email, :password)
  end
end
