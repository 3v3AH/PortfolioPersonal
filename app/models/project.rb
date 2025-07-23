class Project < ApplicationRecord
  validates :title, :description, :tags, :image_url, :demo_url, :code_url, presence: true

  # Si las etiquetas están separadas por comas, podemos añadir un helper
  def tag_list
    tags.split(',').map(&:strip)
  end
end
