class ApplicationController < ActionController::API
  def logged_in?
    !!current_user
  end

  def current_user
    if auth_present?
      user = User.find_by(id: auth["user"])
      if user
        @current_user ||= user
      end
    end
  end

  def authenticate
    render json: {error: "unauthorized"}, status: 401 unless logged_in?
  end

  def authenticate_expert(date)
    if date
      current_user.expert == 1 && date.expert_id == current_user.id ? true : false
    else
      current_user.expert == 1
    end
  end

  private

  def token
    request.env["HTTP_AUTHORIZATION"].scan(/Bearer (.*)$/).flatten.last
  end

  def auth
    Auth.decode(token)
  end

  def auth_present?
    !!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
  end
end
