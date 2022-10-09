class StoryLine < ApplicationRecord
  has_many :options
  has_many :stories, through: :options
  has_many :choices, through: :options
  has_one_attached :storyline_img

  def parse_url(imageUrl)
    url = URI.parse(imageUrl)
    filename = File.basename(url.path)
    file = URI.open(url)
    [file, filename]
  end
end
