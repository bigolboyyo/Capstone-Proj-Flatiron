class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :background

  has_many :character_items

  # def char_options
  #   options = Story.all.find { |s| s.character_id === self.object.id }.options
  #   if options
  #     render json: options, status: :ok
  #   else
  #     render json: { errors: "no active character" }, status: :record_not_found
  #   end
  # end
end
