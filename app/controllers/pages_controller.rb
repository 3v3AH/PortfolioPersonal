class PagesController < ApplicationController
  def about
  end

  def contact
  end

  def submit_contact
    # Si deseas guardar o enviar el mensaje, lo harás aquí
    flash[:notice] = "Mensaje enviado exitosamente."
    redirect_to contact_path
  end
end
