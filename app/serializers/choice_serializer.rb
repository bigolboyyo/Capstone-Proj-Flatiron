class ChoiceSerializer < ActiveModel::Serializer
  attributes :id, :choice_text, :next_choice
end
